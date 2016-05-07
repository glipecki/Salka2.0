package net.lipecki.salka.auth;

import io.swagger.annotations.ApiOperation;
import net.lipecki.salka.security.SalkaUser;
import net.lipecki.salka.security.jwt.JwtTokenService;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.stream.Collectors;

/**
 * Entry point for user authentication and authorization.
 */
@RequestMapping("/api/v1")
public class AuthController {

    private final JwtTokenService tokenService;

    public AuthController(JwtTokenService tokenService) {
        this.tokenService = tokenService;
    }

    /**
     * Returns user details and valid authentication token based on previously verified authentication credentials (based on sprint-security).
     *
     * @return response with user details and valid authentication token
     */
    @RequestMapping(
            value = "login",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    @ApiOperation(
            value = "Returns user details and valid authentication token",
            notes = "<p>" +
                    "Returns user details based on current spring security authentication/principal." +
                    "</p>" +
                    "<p>" +
                    "Allows to generate authentication token based on any available authentication method (basic authentication, " +
                    "sso/kerberos, jwt token)." +
                    "</p>" +
                    "<p>" +
                    "May be used as keep alive service. When called with valid JWT token will generate fresh one (with new expiration date)." +
                    "</p>"
    )
    @ResponseBody
    public UserAuthResponse login(@AuthenticationPrincipal Authentication authentication) {
        final SalkaUser user = new SalkaUser(
                authentication.getName(),
                authentication.getAuthorities()
                        .stream()
                        .map(auth -> auth.getAuthority())
                        .collect(Collectors.toList())
        );
        return new UserAuthResponse(user, tokenService.getToken(user));
    }

}
