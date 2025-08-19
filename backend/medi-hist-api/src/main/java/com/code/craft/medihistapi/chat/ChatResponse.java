package com.code.craft.medihistapi.chat;

import lombok.Data;

@Data
public class ChatResponse {
    private String type;
    private String text;
    private String query;

}