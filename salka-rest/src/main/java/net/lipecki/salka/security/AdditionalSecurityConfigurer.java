package net.lipecki.salka.security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

public interface AdditionalSecurityConfigurer {

    void afterAuthenticationManager(AuthenticationManager authenticationManager);

    void configure(AuthenticationManagerBuilder builder) throws Exception;

    void configure(HttpSecurity http) throws Exception;

}