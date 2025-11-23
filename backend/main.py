from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.contact import router as contact_router
from routers import contact

app = FastAPI()

# CORS configurado para tu frontend (puedes poner "*" si prefieres)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # o ["*"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rutas
app.include_router(contact_router)

app.include_router(contact.router)

@app.get("/")
def root():
    return {"message": "Servidor FastAPI funcionando correctamente 🚀"}
