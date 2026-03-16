import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

client = Groq(api_key=api_key)


def get_ai_response(question):

    try:

        system_prompt = """
You are an AI tutor for students preparing for JEE and NEET exams.

Rules:
- Only answer questions related to Physics, Chemistry, Mathematics, or Biology.
- If the question is unrelated (history, politics, movies, etc.), politely refuse.
- Explain concepts in simple language suitable for a 12th grade student.
- Focus on conceptual understanding.
- dont give ** and \n like symbols and give the answer in short and understable step by step soln and no needx to mention step no always.
- Avoid heavy formulas unless absolutely necessary.
- Keep answers clear and concise.
"""

        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": question}
            ],
            model="llama-3.1-8b-instant"
        )

        return chat_completion.choices[0].message.content

    except Exception as e:
        print("Groq error:", e)
        return str(e)