package net.lipecki.salka.security.jwt;

public class JwtAuthenticationToken {

    private String token;

    public JwtAuthenticationToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

}
