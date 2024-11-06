
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 12:00:00", "b": 608.0}, {"a": "2024-11-05 12:05:00", "b": 609.2}, {"a": "2024-11-05 12:10:00", "b": 602.0}, {"a": "2024-11-05 12:15:00", "b": 599.25}, {"a": "2024-11-05 12:20:00", "b": 575.2}, {"a": "2024-11-05 12:25:00", "b": 582.0}, {"a": "2024-11-05 12:30:00", "b": 572.6}, {"a": "2024-11-05 12:35:00", "b": 576.8}, {"a": "2024-11-05 12:40:00", "b": 576.6}, {"a": "2024-11-05 12:45:00", "b": 552.4}, {"a": "2024-11-05 12:50:00", "b": 555.25}, {"a": "2024-11-05 12:55:00", "b": 571.75}, {"a": "2024-11-05 13:00:00", "b": 570.25}, {"a": "2024-11-05 13:05:00", "b": 551.6}, {"a": "2024-11-05 13:10:00", "b": 553.0}, {"a": "2024-11-05 13:15:00", "b": 556.2}, {"a": "2024-11-05 13:20:00", "b": 562.6}, {"a": "2024-11-05 13:25:00", "b": 547.6}, {"a": "2024-11-05 13:30:00", "b": 535.8}, {"a": "2024-11-05 13:35:00", "b": 530.8}, {"a": "2024-11-05 13:40:00", "b": 533.0}, {"a": "2024-11-05 13:45:00", "b": 541.0}, {"a": "2024-11-05 13:50:00", "b": 550.2}, {"a": "2024-11-05 13:55:00", "b": 537.2}, {"a": "2024-11-05 14:00:00", "b": 527.6}, {"a": "2024-11-05 14:05:00", "b": 522.4}, {"a": "2024-11-05 14:10:00", "b": 513.0}, {"a": "2024-11-05 14:15:00", "b": 504.0}, {"a": "2024-11-05 14:20:00", "b": 507.5}, {"a": "2024-11-05 14:25:00", "b": 522.75}, {"a": "2024-11-05 14:30:00", "b": 517.8}, {"a": "2024-11-05 14:35:00", "b": 502.0}, {"a": "2024-11-05 14:40:00", "b": 502.6}, {"a": "2024-11-05 14:45:00", "b": 517.75}, {"a": "2024-11-05 14:50:00", "b": 526.25}, {"a": "2024-11-05 14:55:00", "b": 502.0}, {"a": "2024-11-05 15:00:00", "b": 486.75}, {"a": "2024-11-05 15:05:00", "b": 489.6666666666667}, {"a": "2024-11-05 15:10:00", "b": 493.6}, {"a": "2024-11-05 15:15:00", "b": 481.0}, {"a": "2024-11-05 15:20:00", "b": 462.6}, {"a": "2024-11-05 15:25:00", "b": 451.6666666666667}, {"a": "2024-11-05 15:30:00", "b": 451.5}, {"a": "2024-11-05 15:35:00", "b": 453.5}, {"a": "2024-11-05 15:40:00", "b": 453.8}, {"a": "2024-11-05 15:45:00", "b": 452.25}, {"a": "2024-11-05 15:50:00", "b": 459.2}, {"a": "2024-11-05 15:55:00", "b": 464.8}, {"a": "2024-11-05 16:00:00", "b": 458.5}, {"a": "2024-11-05 16:05:00", "b": 467.2}, {"a": "2024-11-05 16:10:00", "b": 489.4}, {"a": "2024-11-05 16:15:00", "b": 455.25}, {"a": "2024-11-05 16:20:00", "b": 452.4}, {"a": "2024-11-05 16:25:00", "b": 454.8}, {"a": "2024-11-05 16:30:00", "b": 453.25}, {"a": "2024-11-05 16:35:00", "b": 458.75}, {"a": "2024-11-05 16:40:00", "b": 455.4}, {"a": "2024-11-05 16:45:00", "b": 458.25}, {"a": "2024-11-05 16:50:00", "b": 466.6}, {"a": "2024-11-05 16:55:00", "b": 466.75}, {"a": "2024-11-05 17:00:00", "b": 473.75}, {"a": "2024-11-05 17:05:00", "b": 476.6}, {"a": "2024-11-05 17:10:00", "b": 463.6}, {"a": "2024-11-05 17:15:00", "b": 453.0}, {"a": "2024-11-05 17:20:00", "b": 443.4}, {"a": "2024-11-05 17:25:00", "b": 449.2}, {"a": "2024-11-05 17:30:00", "b": 452.0}, {"a": "2024-11-05 17:35:00", "b": 439.6}, {"a": "2024-11-05 17:40:00", "b": 437.5}, {"a": "2024-11-05 17:45:00", "b": 449.2}, {"a": "2024-11-05 17:50:00", "b": 458.5}, {"a": "2024-11-05 17:55:00", "b": 464.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    