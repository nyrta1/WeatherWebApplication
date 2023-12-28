FROM python:3.11
WORKDIR /app
COPY . .

RUN pip install Flask Flask-Cors python-weather

EXPOSE 5000

CMD ["python", "./main.py"]
