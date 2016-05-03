package net.lipecki.salka.security.jwt;

import net.lipecki.salka.security.AdditionalSecurityConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AnonymousAuthenticationFilter;

@Configuration
public class JwtSecutityConfiguration implements AdditionalSecurityConfigurer {

    @Bean
    public JwtAuthenticationProvider jwtAuthenticationProvider() {
        return new JwtAuthenticationProvider(jwtTokenService());
    }

    @Bean
    public JwtTokenService jwtTokenService() {
        return new JwtTokenService();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter(authenticationManagerDelegate().getHelper());
    }

    @Override
    public void afterAuthenticationManager(AuthenticationManager authenticationManager) {
        authenticationManagerDelegate().setDelegate(authenticationManager);
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder) {
        builder.authenticationProvider(jwtAuthenticationProvider());
    }

    @Override
    public void configure(HttpSecurity http) {
        http.addFilterBefore(jwtAuthenticationFilter(), AnonymousAuthenticationFilter.class);
    }

    @Bean
    public AuthenticationManagerDelegate authenticationManagerDelegate() {
        return new AuthenticationManagerDelegate();
    }

    private static final class AuthenticationManagerDelegate {

        private AuthenticationManager delegate;

        public void setDelegate(AuthenticationManager delegate) {
            this.delegate = delegate;
        }

        public AuthenticationManager getHelper() {
            return authentication -> authenticate(authentication);
        }

        private Authentication authenticate(Authentication authentication) throws AuthenticationException {
            if (delegate != null) {
                return delegate.authenticate(authentication);
            } else {
                throw new IllegalStateException("Authentication manager delegate used before delegate set");
            }
        }
    }

}
