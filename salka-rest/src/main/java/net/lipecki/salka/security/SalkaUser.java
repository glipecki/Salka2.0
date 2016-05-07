package net.lipecki.salka.security;

import io.swagger.annotations.ApiModelProperty;

import java.util.Collections;
import java.util.List;

/**
 * User of salka ;)
 */
public class SalkaUser {

    private final String username;

    private final List<String> authorities;

    @ApiModelProperty(value = "Unique user identifier", required = true, example = "admin")
    public String getUsername() {
        return username;
    }

    @ApiModelProperty(value = "User granted authorities", required = true)
    public List<String> getAuthorities() {
        return authorities;
    }

    public SalkaUser(final String username, final List<String> authorities) {
        this.username = username;
        this.authorities = Collections.unmodifiableList(authorities);
    }

}
