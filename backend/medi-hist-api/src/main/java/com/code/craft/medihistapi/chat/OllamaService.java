package com.code.craft.medihistapi.chat;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class OllamaService {

    private final WebClient webClient = WebClient.create();

    @Value("${ollama.base-url}")
    private String baseUrl;

    @Value("${ollama.model}")
    private String model;

    public String queryModel(String prompt) {
        String response = webClient.post()
                .uri(baseUrl + "/api/generate")
                .bodyValue(new OllamaRequest(model, prompt))
                .retrieve()
                .bodyToMono(String.class)
                .block();
        return response;
    }

    record OllamaRequest(String model, String prompt) {}
}
