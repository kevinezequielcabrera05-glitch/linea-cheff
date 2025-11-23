# utils/email_sender.py
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import EMAIL_USER, SMTP_PASSWORD
import logging

# Configuramos logger para que muestre errores en la terminal
logger = logging.getLogger("uvicorn.error")

def send_email(name: str, email: str, message: str):
    try:
        sender_email = EMAIL_USER
        receiver_email = EMAIL_USER  # Te lo envías a vos mismo
        subject = f"Nuevo mensaje de contacto de {name}"

        body = f"""
        Nombre: {name}
        Email: {email}
        Mensaje: {message}
        """

        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = receiver_email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        logger.debug(f"Conectando al servidor SMTP como {sender_email}...")

        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            logger.debug("Conexión segura establecida (STARTTLS)")
            server.login(sender_email, SMTP_PASSWORD)
            logger.debug("Login SMTP exitoso")
            server.send_message(msg)
            logger.info(f"Correo enviado correctamente a {receiver_email}")

    except smtplib.SMTPAuthenticationError:
        logger.error("Error de autenticación SMTP: revisa tu EMAIL_USER y SMTP_PASSWORD")
        raise Exception("Error de autenticación SMTP: revisa tus credenciales")
    except smtplib.SMTPConnectError as e:
        logger.error(f"No se pudo conectar al servidor SMTP: {e}")
        raise Exception(f"No se pudo conectar al servidor SMTP: {e}")
    except Exception as e:
        logger.error(f"Error al enviar el correo: {e}")
        raise Exception(f"Error al enviar el correo: {e}")
