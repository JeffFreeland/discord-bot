FROM python:3.9.6-alpine3.14

WORKDIR /app

# There is an error with a couple python packages (yarl and multidict?) that need gcc installed to build for some reason. 
# musl-dev was also necessary for the gcc compilation to succeed without complaining about limits.h missing. It is what it is. 
RUN apk update && apk add gcc musl-dev

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY main.py main.py

CMD ["python", "main.py"]