package net.lipecki.salka.security.jwt;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;

public class JwtAuthenticationFilter extends AbstractPreAuthenticatedProcessingFilter {

    private static final String BEARER_PREFIX = "Bearer ";

    public JwtAuthenticationFilter(final AuthenticationManager authenticationManager) {
        setAuthenticationManager(authenticationManager);
    }

    @Override
    protected Object getPreAuthenticatedPrincipal(HttpServletRequest request) {
        final String authorizationHeader = request.getHeader("Authorization");
        if (isValidBearerToken(authorizationHeader)) {
            return new JwtAuthenticationToken(authorizationHeader.substring(7));
        } else {
            return null;
        }
    }

    private boolean isValidBearerToken(final String authorizationHeader) {
        return !StringUtils.isEmpty(authorizationHeader)
                && authorizationHeader.startsWith(BEARER_PREFIX)
                && authorizationHeader.length() > BEARER_PREFIX.length();
    }

    @Override
    protected Object getPreAuthenticatedCredentials(HttpServletRequest request) {
        return "N/A";
    }

}
