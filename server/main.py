from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.openapi.docs import  get_redoc_html, get_swagger_ui_html

app = FastAPI(docs_url=None, redoc_url=None, title="Kinetic", root_path='/api')

app.mount("/static", StaticFiles(directory="./static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Local Swagger UI
@app.get("/docs", include_in_schema=False)
async def local_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=f"/api{app.openapi_url}",
        title=app.title + " - Swagger UI (Local)",
        oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
        swagger_js_url="./static/swagger-ui-bundle.js",
        swagger_css_url="./static/swagger-ui.css",
    )

# Local ReDoc
@app.get("/redoc", include_in_schema=False)
async def redoc_html():
    return get_redoc_html(
        openapi_url=f"/api{app.openapi_url}",
        title=app.title + " - ReDoc (Local)",
        redoc_js_url="./static/redoc.standalone.js",
    )

@app.get('/')
async def root():
    return {"msg": "Kinetic is running now!"}

