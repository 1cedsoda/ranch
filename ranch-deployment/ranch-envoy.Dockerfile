FROM envoyproxy/envoy:v1.26-latest
COPY ./ranch-envoy/envoy.yaml /etc/envoy/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml