from fastapi import APIRouter, HTTPException
from models.forms import ContactForm
from utils.email_sender import send_email
import logging
logger = logging.getLogger("uvicorn.error")

router = APIRouter()

@router.post("/send-email")
def send_contact_email(form: ContactForm):
    try:
        send_email(form.name, form.email, form.message)
        return {"status": "success", "message": "Correo enviado correctamente"}
    except Exception as e:
        logger.error(f"ERROR SEND EMAIL: {e}")
        raise HTTPException(status_code=500, detail=str(e))
