package com.code.craft.medihistapi.chat;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.regex.Matcher;
import java.util.regex.Pattern;


@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private OllamaService ollamaService;

    @PostMapping("/message")
    public ChatResponse chatFullMessage(@RequestBody ChatRequest request) throws JSONException {
        String fullResponse = ollamaService.streamSQL(request.getUserMessage())
                .reduce(new StringBuilder(), StringBuilder::append)
                .map(StringBuilder::toString)
                .block();

        ChatResponse response = new ChatResponse();
        response.setType("text");
        String query = "";
        Pattern pattern = Pattern.compile("```sql\\s*(.*?)\\s*```", Pattern.DOTALL);
        Matcher matcher = pattern.matcher(fullResponse);
        if (matcher.find()) {
            query = matcher.group(1).trim();
        }
        String textWithoutQuery = fullResponse.replaceAll("```sql.*?```", "").trim();
        response.setText(textWithoutQuery);
        response.setQuery(query);

        return response;
    }




}