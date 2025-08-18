package com.code.craft.medihistapi.chat;

import lombok.Data;

@Data
public class ChatResponse {
    private String type;   // "text", "table", "chart"
    private Object result; // Can be String, JSON, or table data
}