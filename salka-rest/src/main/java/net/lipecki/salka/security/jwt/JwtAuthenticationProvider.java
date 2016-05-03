package net.lipecki.salka.security.jwt;

import net.lipecki.salka.security.SalkaUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedCredentialsNotFoundException;

import java.util.stream.Collectors;

public class JwtAuthenticationProvider implements AuthenticationProvider {

    private JwtTokenService jwtTokenService;

    public JwtAuthenticationProvider(final JwtTokenService jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if (authentication.getPrincipal() instanceof JwtAuthenticationToken) {
            try {
                final String jwtToken = ((JwtAuthenticationToken) authentication.getPrincipal()).getToken();
                final SalkaUser user = jwtTokenService.parseUser(jwtToken);
                return new PreAuthenticatedAuthenticationToken(
                        user.getUsername(),
                        null,
                        user.getAuthorities()
                                .stream()
                                .map((authority) -> new SimpleGrantedAuthority(authority))
                                .collect(Collectors.toList()));
            } catch (final Exception exception) {
                log.debug("JWT authentication failure", exception);
                throw new JwtAuthenticationException(exception.getMessage(), exception);
            }
        } else {
            throw new PreAuthenticatedCredentialsNotFoundException("Invalid authentication principal for JWT authentication!");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return PreAuthenticatedAuthenticationToken.class.isAssignableFrom(authentication);
    }

    public static final class JwtAuthenticationException extends AuthenticationException {
        public JwtAuthenticationException(String message, Exception cause) {
            super(message, cause);
        }
    }

    private static final Logger log = LoggerFactory.getLogger(JwtAuthenticationProvider.class);

}
