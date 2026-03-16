from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.ask_doubt_router import router as ask_doubt_router

app = FastAPI()

# CORS for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include router
app.include_router(ask_doubt_router)

@app.get("/")
def root():
    return {"message": "AI Tutor API running"}