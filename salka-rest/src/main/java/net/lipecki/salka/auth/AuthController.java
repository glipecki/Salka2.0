package net.lipecki.salka.auth;

import net.lipecki.salka.security.SalkaUser;
import net.lipecki.salka.security.jwt.JwtTokenService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
    @RequestMapping("login")
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
