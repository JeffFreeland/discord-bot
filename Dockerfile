FROM python:3.9.6-alpine3.14

WORKDIR /app

RUN apk update && apk add gcc musl-dev

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY main.py main.py

CMD ["python", "main.py"]