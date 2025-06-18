from fastapi import Request, HTTPException
from fastapi.routing import APIRoute
from jose import JWTError, jwt
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.status import HTTP_401_UNAUTHORIZED
from backend.auth import SECRET_KEY, ALGORITHM, decode_access_token

class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if request.url.path.startswith("/api/protected"):
            token = request.headers.get("Authorization")
            if token and token.startswith("Bearer "):
                token = token.split(" ")[1]
                try:
                    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
                    request.state.user = payload.get("sub")
                except JWTError:
                    raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
            else:
                raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Authorization token missing")
        response = await call_next(request)
        return response