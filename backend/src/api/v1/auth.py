from fastapi import APIRouter
from pydantic import EmailStr, BaseModel
from uuid import UUID

router = APIRouter()

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    first_name: str
    last_name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: UUID
    email: EmailStr
    first_name: str
    last_name: str

class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut

@router.post("/register/", response_model=AuthResponse)
async def register_user(user: UserCreate):
    pass

@router.post("/login/", response_model=AuthResponse)
async def login_user(user: UserLogin):
    pass