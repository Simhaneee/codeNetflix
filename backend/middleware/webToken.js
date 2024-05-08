import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
            _id: user._id,
            email: user.email,
        },
        'Fsd_31_netfilx_clone', 
        {
            expiresIn: '1d',
        }
    );
};

export const isAuth = (req, res, next) => {

    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
        console.log(token,"tttttt",authorization,"ccccccc")
        jwt.verify(
            token,
         'Fsd_31_netfilx_clone',
            (error, decode) => {
                if (error) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    // console.log(decode)
                    req.user = decode;
                                        next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

