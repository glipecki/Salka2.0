package net.lipecki.salka.security.base;

import net.lipecki.salka.security.AdditionalSecurityConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
public class BaseSecurityConfiguration implements AdditionalSecurityConfigurer {

    @Override
    public void afterAuthenticationManager(AuthenticationManager authenticationManager) {
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder) throws Exception {
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/api/**")
                .authenticated()
                .anyRequest()
                .permitAll();
    }

}
