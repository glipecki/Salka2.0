package net.lipecki.salka.security.basic;

import net.lipecki.salka.security.AdditionalSecurityConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
public class BasicAuthSecurityConfiguration implements AdditionalSecurityConfigurer {

    @Override
    public void afterAuthenticationManager(AuthenticationManager authenticationManager) {
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder) throws Exception {
        builder
                .inMemoryAuthentication()
                .withUser("gregorry").password("q1w2e3r4").roles("admin", "user");
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.httpBasic()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));
    }

}
