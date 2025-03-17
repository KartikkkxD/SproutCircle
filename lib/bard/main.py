from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .Bard import Bard
import os

app = FastAPI()
bard = Bard(os.getenv("BARD_API_KEY"))

class Message(BaseModel):
    input: str

@app.post("/chat")
async def chat(message: Message):
    try:
        response = bard.ask(message.input)
        return {"output": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

