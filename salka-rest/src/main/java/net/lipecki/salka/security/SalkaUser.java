package net.lipecki.salka.security;

import java.util.Collections;
import java.util.List;

public class SalkaUser {

    private final String username;

    private final List<String> authorities;

    public String getUsername() {
        return username;
    }

    public List<String> getAuthorities() {
        return authorities;
    }

    public SalkaUser(final String username, final List<String> authorities) {
        this.username = username;
        this.authorities = Collections.unmodifiableList(authorities);
    }

}
