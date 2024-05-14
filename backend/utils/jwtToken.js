export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: 'None',
    path: '/', // Set the path as needed for your application
    secure: true,
    // Add more options as needed, e.g., secure: true for HTTPS
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
