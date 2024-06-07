# ALL this shit doesn't apply migrations for some reason
# # https://github.com/SPECTADO/pocketbase-docker
# # https://hub.docker.com/r/spectado/pocketbase
# FROM alpine:3 as downloader

# ARG TARGETOS=linux
# ARG TARGETARCH=amd64
# ARG TARGETVARIANT=""
# ARG VERSION=0.22.13

# ENV BUILDX_ARCH="${TARGETOS:-linux}_${TARGETARCH:-amd64}${TARGETVARIANT}"

# ADD https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip /tmp/pocketbase.zip
# RUN unzip /tmp/pocketbase.zip -d /pb/ && \
#     chmod +x /pb/pocketbase

# # RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
# #     && unzip pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
# #     && chmod +x /pocketbase

# FROM alpine:3
# RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

# EXPOSE 8080

# # COPY --from=downloader /pocketbase /usr/local/bin/pocketbase

# # uncomment to copy the local pb_migrations dir into the container
# COPY ./pb_migrations /pb/pb_migrations

# # uncomment to copy the local pb_hooks dir into the container
# # COPY ./pb_hooks /pb/pb_hooks

# # ENTRYPOINT ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/pb_data", "--publicDir=/pb_public", "--migrationsDir=/pb_migrations", "--hooksDir=/pb_hooks"]

# # hooksDir not a valid option, breaks caprover build
# # ENTRYPOINT ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/pb/pb_data", "--publicDir=/pb/pb_public", "--migrationsDir=/pb/pb_migrations", "--hooksDir=/pb/pb_hooks"]
# # ENTRYPOINT ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
# ENTRYPOINT ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/pb/pb_data", "--publicDir=/pb/pb_public", "--migrationsDir=/pb/pb_migrations"]

# But this stuff does apply migrations
FROM alpine:latest

ARG PB_VERSION=0.22.13

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# uncomment to copy the local pb_migrations dir into the image
COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks /pb/pb_hooks

EXPOSE 8080

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
