
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-05 12:00:00", "b": 483.75}, {"a": "2025-03-05 12:05:00", "b": 471.25}, {"a": "2025-03-05 12:10:00", "b": 474.75}, {"a": "2025-03-05 12:15:00", "b": 487.5}, {"a": "2025-03-05 12:20:00", "b": 482.6}, {"a": "2025-03-05 12:25:00", "b": 480.0}, {"a": "2025-03-05 12:30:00", "b": 469.4}, {"a": "2025-03-05 12:35:00", "b": 459.25}, {"a": "2025-03-05 12:40:00", "b": 453.3333333333333}, {"a": "2025-03-05 12:45:00", "b": 462.4}, {"a": "2025-03-05 12:50:00", "b": 466.4}, {"a": "2025-03-05 12:55:00", "b": 460.6666666666667}, {"a": "2025-03-05 13:00:00", "b": 461.0}, {"a": "2025-03-05 13:05:00", "b": 459.6}, {"a": "2025-03-05 13:10:00", "b": 454.2}, {"a": "2025-03-05 13:15:00", "b": 455.8}, {"a": "2025-03-05 13:20:00", "b": 450.0}, {"a": "2025-03-05 13:25:00", "b": 449.8}, {"a": "2025-03-05 13:30:00", "b": 448.8}, {"a": "2025-03-05 13:35:00", "b": 439.2}, {"a": "2025-03-05 13:40:00", "b": 444.5}, {"a": "2025-03-05 13:45:00", "b": 440.0}, {"a": "2025-03-05 13:50:00", "b": 439.0}, {"a": "2025-03-05 13:55:00", "b": 437.25}, {"a": "2025-03-05 14:00:00", "b": 443.6}, {"a": "2025-03-05 14:05:00", "b": 452.0}, {"a": "2025-03-05 14:10:00", "b": 452.3333333333333}, {"a": "2025-03-05 14:15:00", "b": 446.75}, {"a": "2025-03-05 14:20:00", "b": 441.0}, {"a": "2025-03-05 14:25:00", "b": 447.0}, {"a": "2025-03-05 14:30:00", "b": 449.2}, {"a": "2025-03-05 14:35:00", "b": 441.0}, {"a": "2025-03-05 14:40:00", "b": 453.6}, {"a": "2025-03-05 14:45:00", "b": 451.75}, {"a": "2025-03-05 14:50:00", "b": 437.25}, {"a": "2025-03-05 14:55:00", "b": 429.4}, {"a": "2025-03-05 15:00:00", "b": 431.0}, {"a": "2025-03-05 15:05:00", "b": 428.6}, {"a": "2025-03-05 15:10:00", "b": 425.4}, {"a": "2025-03-05 15:15:00", "b": 451.6}, {"a": "2025-03-05 15:20:00", "b": 438.0}, {"a": "2025-03-05 15:25:00", "b": 439.0}, {"a": "2025-03-05 15:30:00", "b": 443.25}, {"a": "2025-03-05 15:35:00", "b": 431.8}, {"a": "2025-03-05 15:40:00", "b": 436.0}, {"a": "2025-03-05 15:45:00", "b": 430.5}, {"a": "2025-03-05 15:50:00", "b": 430.0}, {"a": "2025-03-05 15:55:00", "b": 427.6}, {"a": "2025-03-05 16:00:00", "b": 428.25}, {"a": "2025-03-05 16:05:00", "b": 423.8}, {"a": "2025-03-05 16:10:00", "b": 428.0}, {"a": "2025-03-05 16:15:00", "b": 425.75}, {"a": "2025-03-05 16:20:00", "b": 435.2}, {"a": "2025-03-05 16:25:00", "b": 434.75}, {"a": "2025-03-05 16:30:00", "b": 421.2}, {"a": "2025-03-05 16:35:00", "b": 429.5}, {"a": "2025-03-05 16:40:00", "b": 436.0}, {"a": "2025-03-05 16:45:00", "b": 441.0}, {"a": "2025-03-05 16:50:00", "b": 443.6}, {"a": "2025-03-05 16:55:00", "b": 448.75}, {"a": "2025-03-05 17:00:00", "b": 452.2}, {"a": "2025-03-05 17:05:00", "b": 451.0}, {"a": "2025-03-05 17:10:00", "b": 449.0}, {"a": "2025-03-05 17:15:00", "b": 447.2}, {"a": "2025-03-05 17:20:00", "b": 444.0}, {"a": "2025-03-05 17:25:00", "b": 465.8}, {"a": "2025-03-05 17:30:00", "b": 458.0}, {"a": "2025-03-05 17:35:00", "b": 453.0}, {"a": "2025-03-05 17:40:00", "b": 460.6}, {"a": "2025-03-05 17:45:00", "b": 453.75}, {"a": "2025-03-05 17:50:00", "b": 458.5}, {"a": "2025-03-05 17:55:00", "b": 460.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    