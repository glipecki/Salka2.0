package net.lipecki.salka.security.jwt;

import io.jsonwebtoken.*;
import net.lipecki.salka.security.SalkaUser;

import java.util.List;

public class JwtTokenService {

    public static final String AUTHORITIES = "authorities";

    private byte[] getSigningKey() {
        return "secret".getBytes();
    }

    private JwtParser getParser() {
        return Jwts.parser().setSigningKey(getSigningKey());
    }

    private JwtBuilder getBuilder() {
        return Jwts.builder().signWith(SignatureAlgorithm.HS512, getSigningKey());
    }

    public SalkaUser parseUser(final String jwtToken) {
        final Jws<Claims> token = getParser().parseClaimsJws(jwtToken);
        final List<String> authorities = (List<String>) token.getBody().get(AUTHORITIES);
        return new SalkaUser(token.getBody().getSubject(), authorities);
    }

    public String getToken(final SalkaUser user) {
        return getBuilder()
                .setSubject(user.getUsername())
                .claim(AUTHORITIES, user.getAuthorities())
                .compact();
    }

}
