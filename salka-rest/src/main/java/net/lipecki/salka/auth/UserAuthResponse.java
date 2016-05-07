package net.lipecki.salka.auth;

import net.lipecki.salka.security.SalkaUser;

/**
 * Successful authentication method result.
 * <p>
 *     Contains user details and valid authentication token.
 * </p>
 */
public class UserAuthResponse {

    public UserAuthResponse(final SalkaUser user, final String token) {
        this.user = user;
        this.token = token;
    }

    public SalkaUser getUser() {
        return user;
    }

    public String getToken() {
        return token;
    }

    @Override
    public String toString() {
        return "UserAuthResponse{" +
                "user=" + user.getUsername() +
                '}';
    }

    private SalkaUser user;

    private String token;

}
