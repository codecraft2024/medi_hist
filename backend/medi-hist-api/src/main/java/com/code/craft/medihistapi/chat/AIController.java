package com.code.craft.medihistapi.chat;


 import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AIController {

    private final OllamaService ollamaService;

    @PostMapping("/query")
    public String queryAI(@RequestBody UserQuery query) {
        return ollamaService.queryModel(query.prompt());
    }

    public record UserQuery(String prompt) {}
}