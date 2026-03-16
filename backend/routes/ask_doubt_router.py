from fastapi import APIRouter
from pydantic import BaseModel
from services.gemini_service import get_ai_response

router = APIRouter()

class DoubtRequest(BaseModel):
    question: str


@router.post("/ask-doubt")
def ask_doubt(data: DoubtRequest):

    question = data.question

    try:
        answer = get_ai_response(question)

        return {
            "answer": answer
        }

    except Exception as e:

        return {
            "answer": "AI failed to generate response."
        }