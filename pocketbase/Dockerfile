# https://github.com/SPECTADO/pocketbase-docker
# https://hub.docker.com/r/spectado/pocketbase
FROM alpine:3 as downloader

ARG TARGETOS=linux
ARG TARGETARCH=amd64
ARG TARGETVARIANT=""
ARG VERSION=0.22.13

ENV BUILDX_ARCH="${TARGETOS:-linux}_${TARGETARCH:-amd64}${TARGETVARIANT}"

ADD https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip /tmp/pocketbase.zip
RUN unzip /tmp/pocketbase.zip -d /pb/ && \
    chmod +x /pb/pocketbase

# RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
#     && unzip pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
#     && chmod +x /pocketbase

FROM alpine:3
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

EXPOSE 8080

# COPY --from=downloader /pocketbase /usr/local/bin/pocketbase

# uncomment to copy the local pb_migrations dir into the container
COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the container
# COPY ./pb_hooks /pb/pb_hooks

ENTRYPOINT ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/pb_data", "--publicDir=/pb_public", "--migrationsDir=/pb_migrations", "--hooksDir=/pb_hooks"]
