package net.lipecki.salka.auth;

import net.lipecki.salka.security.jwt.JwtSecutityConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AuthInjector {

    @Bean
    public AuthController loginController() {
        return new AuthController(jwtSecutityConfiguration.jwtTokenService());
    }

    @Autowired
    private JwtSecutityConfiguration jwtSecutityConfiguration;

}
