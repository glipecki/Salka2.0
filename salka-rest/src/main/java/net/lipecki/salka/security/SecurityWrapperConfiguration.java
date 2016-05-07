package net.lipecki.salka.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityWrapperConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private List<AdditionalSecurityConfigurer> additionalSecurityConfigurer;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        try {
            final AuthenticationManager authenticationManager = super.authenticationManager();
            additionalSecurityConfigurer.forEach(conf -> conf.afterAuthenticationManager(authenticationManager));
            return authenticationManager;
        } catch (final Exception e) {
            throw new RuntimeException("Can't initiate authentication manager", e);
        }
    }

    @Override
    protected void configure(final AuthenticationManagerBuilder builder) throws Exception {
        additionalSecurityConfigurer.forEach(conf -> {
            try {
                conf.configure(builder);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        additionalSecurityConfigurer.forEach(conf -> {
            try {
                conf.configure(http);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }

}
