
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-11 12:00:00", "b": 440.0}, {"a": "2025-04-11 12:05:00", "b": 436.6}, {"a": "2025-04-11 12:10:00", "b": 436.25}, {"a": "2025-04-11 12:15:00", "b": 438.0}, {"a": "2025-04-11 12:20:00", "b": 432.8}, {"a": "2025-04-11 12:25:00", "b": 433.2}, {"a": "2025-04-11 12:30:00", "b": 423.5}, {"a": "2025-04-11 12:35:00", "b": 411.0}, {"a": "2025-04-11 12:40:00", "b": 408.0}, {"a": "2025-04-11 12:45:00", "b": 415.25}, {"a": "2025-04-11 12:50:00", "b": 432.4}, {"a": "2025-04-11 12:55:00", "b": 432.6}, {"a": "2025-04-11 13:00:00", "b": 436.5}, {"a": "2025-04-11 13:05:00", "b": 428.5}, {"a": "2025-04-11 13:10:00", "b": 422.0}, {"a": "2025-04-11 13:15:00", "b": 439.5}, {"a": "2025-04-11 13:20:00", "b": 424.0}, {"a": "2025-04-11 13:25:00", "b": 421.8}, {"a": "2025-04-11 13:30:00", "b": 431.75}, {"a": "2025-04-11 13:35:00", "b": 432.6}, {"a": "2025-04-11 13:40:00", "b": 428.2}, {"a": "2025-04-11 13:45:00", "b": 427.0}, {"a": "2025-04-11 13:50:00", "b": 412.75}, {"a": "2025-04-11 13:55:00", "b": 416.6666666666667}, {"a": "2025-04-11 14:00:00", "b": 418.5}, {"a": "2025-04-11 14:05:00", "b": 413.8}, {"a": "2025-04-11 14:10:00", "b": 409.25}, {"a": "2025-04-11 14:15:00", "b": 410.0}, {"a": "2025-04-11 14:20:00", "b": 422.25}, {"a": "2025-04-11 14:25:00", "b": 422.6}, {"a": "2025-04-11 14:30:00", "b": 435.4}, {"a": "2025-04-11 14:35:00", "b": 425.4}, {"a": "2025-04-11 14:40:00", "b": 420.2}, {"a": "2025-04-11 14:45:00", "b": 422.0}, {"a": "2025-04-11 14:50:00", "b": 413.5}, {"a": "2025-04-11 14:55:00", "b": 408.5}, {"a": "2025-04-11 15:00:00", "b": 410.0}, {"a": "2025-04-11 15:05:00", "b": 413.5}, {"a": "2025-04-11 15:10:00", "b": 415.25}, {"a": "2025-04-11 15:15:00", "b": 411.0}, {"a": "2025-04-11 15:20:00", "b": 413.4}, {"a": "2025-04-11 15:25:00", "b": 409.5}, {"a": "2025-04-11 15:30:00", "b": 411.6666666666667}, {"a": "2025-04-11 15:35:00", "b": 415.25}, {"a": "2025-04-11 15:40:00", "b": 420.2}, {"a": "2025-04-11 15:45:00", "b": 417.0}, {"a": "2025-04-11 15:50:00", "b": 414.2}, {"a": "2025-04-11 15:55:00", "b": 423.6}, {"a": "2025-04-11 16:00:00", "b": 421.6666666666667}, {"a": "2025-04-11 16:05:00", "b": 429.6}, {"a": "2025-04-11 16:10:00", "b": 421.25}, {"a": "2025-04-11 16:15:00", "b": 413.6666666666667}, {"a": "2025-04-11 16:20:00", "b": 428.2}, {"a": "2025-04-11 16:25:00", "b": 440.0}, {"a": "2025-04-11 16:30:00", "b": 435.8}, {"a": "2025-04-11 16:35:00", "b": 435.0}, {"a": "2025-04-11 16:40:00", "b": 439.4}, {"a": "2025-04-11 16:45:00", "b": 440.4}, {"a": "2025-04-11 16:50:00", "b": 420.0}, {"a": "2025-04-11 16:55:00", "b": 424.0}, {"a": "2025-04-11 17:00:00", "b": 423.4}, {"a": "2025-04-11 17:05:00", "b": 418.0}, {"a": "2025-04-11 17:10:00", "b": 416.2}, {"a": "2025-04-11 17:15:00", "b": 412.25}, {"a": "2025-04-11 17:20:00", "b": 412.0}, {"a": "2025-04-11 17:25:00", "b": 422.75}, {"a": "2025-04-11 17:30:00", "b": 417.25}, {"a": "2025-04-11 17:35:00", "b": 419.25}, {"a": "2025-04-11 17:40:00", "b": 422.0}, {"a": "2025-04-11 17:45:00", "b": 433.25}, {"a": "2025-04-11 17:50:00", "b": 421.2}, {"a": "2025-04-11 17:55:00", "b": 428.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    