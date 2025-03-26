
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-25 12:00:00", "b": 446.0}, {"a": "2025-03-25 12:05:00", "b": 449.0}, {"a": "2025-03-25 12:10:00", "b": 447.0}, {"a": "2025-03-25 12:15:00", "b": 447.4}, {"a": "2025-03-25 12:20:00", "b": 449.5}, {"a": "2025-03-25 12:25:00", "b": 443.25}, {"a": "2025-03-25 12:30:00", "b": 435.4}, {"a": "2025-03-25 12:35:00", "b": 441.6}, {"a": "2025-03-25 12:40:00", "b": 450.25}, {"a": "2025-03-25 12:45:00", "b": 448.25}, {"a": "2025-03-25 12:50:00", "b": 443.8}, {"a": "2025-03-25 12:55:00", "b": 443.4}, {"a": "2025-03-25 13:00:00", "b": 431.3333333333333}, {"a": "2025-03-25 13:05:00", "b": 444.75}, {"a": "2025-03-25 13:10:00", "b": 445.0}, {"a": "2025-03-25 13:15:00", "b": 453.75}, {"a": "2025-03-25 13:20:00", "b": 449.4}, {"a": "2025-03-25 13:25:00", "b": 444.3333333333333}, {"a": "2025-03-25 13:30:00", "b": 445.4}, {"a": "2025-03-25 13:35:00", "b": 446.75}, {"a": "2025-03-25 13:40:00", "b": 453.5}, {"a": "2025-03-25 13:45:00", "b": 456.4}, {"a": "2025-03-25 13:50:00", "b": 455.2}, {"a": "2025-03-25 13:55:00", "b": 441.2}, {"a": "2025-03-25 14:00:00", "b": 431.25}, {"a": "2025-03-25 14:05:00", "b": 410.3333333333333}, {"a": "2025-03-25 14:10:00", "b": 407.5}, {"a": "2025-03-25 14:15:00", "b": 411.0}, {"a": "2025-03-25 14:20:00", "b": 423.8}, {"a": "2025-03-25 14:25:00", "b": 430.4}, {"a": "2025-03-25 14:30:00", "b": 430.0}, {"a": "2025-03-25 14:35:00", "b": 431.0}, {"a": "2025-03-25 14:40:00", "b": 433.75}, {"a": "2025-03-25 14:45:00", "b": 428.0}, {"a": "2025-03-25 14:50:00", "b": 419.0}, {"a": "2025-03-25 14:55:00", "b": 418.2}, {"a": "2025-03-25 15:00:00", "b": 423.4}, {"a": "2025-03-25 15:05:00", "b": 438.6}, {"a": "2025-03-25 15:10:00", "b": 445.25}, {"a": "2025-03-25 15:15:00", "b": 432.2}, {"a": "2025-03-25 15:20:00", "b": 416.0}, {"a": "2025-03-25 15:25:00", "b": 411.75}, {"a": "2025-03-25 15:30:00", "b": 425.0}, {"a": "2025-03-25 15:35:00", "b": 440.6}, {"a": "2025-03-25 15:40:00", "b": 436.0}, {"a": "2025-03-25 15:45:00", "b": 440.0}, {"a": "2025-03-25 15:50:00", "b": 432.2}, {"a": "2025-03-25 15:55:00", "b": 445.4}, {"a": "2025-03-25 16:00:00", "b": 463.2}, {"a": "2025-03-25 16:05:00", "b": 462.0}, {"a": "2025-03-25 16:10:00", "b": 452.2}, {"a": "2025-03-25 16:15:00", "b": 454.8}, {"a": "2025-03-25 16:20:00", "b": 441.75}, {"a": "2025-03-25 16:25:00", "b": 427.0}, {"a": "2025-03-25 16:30:00", "b": 427.6}, {"a": "2025-03-25 16:35:00", "b": 407.5}, {"a": "2025-03-25 16:40:00", "b": 416.8}, {"a": "2025-03-25 16:45:00", "b": 422.2}, {"a": "2025-03-25 16:50:00", "b": 418.4}, {"a": "2025-03-25 16:55:00", "b": 425.4}, {"a": "2025-03-25 17:00:00", "b": 419.25}, {"a": "2025-03-25 17:05:00", "b": 426.4}, {"a": "2025-03-25 17:10:00", "b": 433.75}, {"a": "2025-03-25 17:15:00", "b": 448.2}, {"a": "2025-03-25 17:20:00", "b": 423.8}, {"a": "2025-03-25 17:25:00", "b": 439.25}, {"a": "2025-03-25 17:30:00", "b": 428.0}, {"a": "2025-03-25 17:35:00", "b": 413.5}, {"a": "2025-03-25 17:40:00", "b": 405.0}, {"a": "2025-03-25 17:45:00", "b": 409.6}, {"a": "2025-03-25 17:50:00", "b": 429.5}, {"a": "2025-03-25 17:55:00", "b": 434.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    