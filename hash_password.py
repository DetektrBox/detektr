from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
hashed = pwd_context.hash("?sp2#HqDev//91")
print("Your hashed password:\n", hashed)