from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes import auth  # absolute import
from backend.auth_middleware import AuthMiddleware  # optional if you're using it

app = FastAPI()

# CORS: allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional middleware
# app.add_middleware(AuthMiddleware)

# API routes
app.include_router(auth.router, prefix="/api")