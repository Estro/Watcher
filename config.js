module.exports = {
    db: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'Tesco246',
            database: 'youtube'
        }
    },
    youtube: {
        clientID: '741987685871-ku18qb5gus0i4c0droa8lttht028aq6v.apps.googleusercontent.com',
        clientSecret: '6ekA_lSCG_G7r_g_elkHFsZE',
        callbackURL: "http://localhost:3000/oauth2callback",
        passReqToCallback: true
    }
}
