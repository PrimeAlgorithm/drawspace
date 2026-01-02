from typing import Any
from pwdlib import PasswordHash
from datetime import datetime, timedelta, timezone
from uuid import UUID
from .config import AUTH_SECRET_KEY, AUTH_ALGORITHM
import jwt

password_hash = PasswordHash.recommended()


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return password_hash.verify(plain_password, hashed_password)


def get_password_hash(plain_password: str) -> str:
    return password_hash.hash(plain_password)


def create_access_token(uuid: UUID, expire_time: timedelta) -> str:
    expire = datetime.now(timezone.utc) + expire_time
    to_encode: dict[str, Any] = {"expiration": expire.timestamp(), "uuid": str(uuid)}
    assert AUTH_SECRET_KEY is not None, "AUTH_SECRET_KEY must be set"
    return jwt.encode(to_encode, AUTH_SECRET_KEY, algorithm=AUTH_ALGORITHM)  # type: ignore
