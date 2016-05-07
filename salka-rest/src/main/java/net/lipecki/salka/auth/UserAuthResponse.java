package net.lipecki.salka.auth;

import io.swagger.annotations.ApiModelProperty;
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

    @ApiModelProperty(value = "Authenticated user details", required = true)
    public SalkaUser getUser() {
        return user;
    }

    @ApiModelProperty(value = "Valid user authentication token", example = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiJ9.PGnRccPTXeaxA8nzfytWewWRkizJa_ihI_3H6ec-Zbw", required = true)
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
