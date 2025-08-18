package com.code.craft.medihistapi.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private OllamaService ollamaService;

    @PostMapping
    public ChatResponse chatFull(@RequestBody ChatRequest request) {
        String fullResponse = ollamaService.streamSQL(request.getUserMessage())
                .reduce(new StringBuilder(), StringBuilder::append)
                .map(StringBuilder::toString)
                .block();  // blocking here to get the full text

        ChatResponse response = new ChatResponse();
        response.setType("text");
        response.setResult(fullResponse);
        return response;
    }
}