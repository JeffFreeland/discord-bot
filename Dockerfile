FROM python:3.9.6-slim-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY main.py main.py

CMD ["python", "main.py"]