package com.code.craft.medihistapi.chat;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.http.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;


@Service
public class OllamaService {

    private final WebClient webClient;

    @Value("${ollama.base-url}")
    private String ollamaUrl;

    @Value("${ollama.model}")
    private String ollamaModel;

    public OllamaService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public Flux<String> streamSQL(String prompt) {
        JSONObject request = new JSONObject();
        request.put("model", ollamaModel);
        request.put("prompt", prompt);

        return webClient.post()
                .uri(ollamaUrl)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.TEXT_EVENT_STREAM) // crucial for streaming
                .bodyValue(request.toString())
                .retrieve()
                .bodyToFlux(String.class)
                .flatMap(line -> {
                    line = line.trim();
                    if (line.isEmpty()) return Flux.empty();
                    JSONObject obj = new JSONObject(line);
                    return Flux.just(obj.optString("response", ""));
                });
    }
}
