
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 14:50:00", "b": 526.25}, {"a": "2024-11-05 14:55:00", "b": 502.0}, {"a": "2024-11-05 15:00:00", "b": 486.75}, {"a": "2024-11-05 15:05:00", "b": 489.6666666666667}, {"a": "2024-11-05 15:10:00", "b": 493.6}, {"a": "2024-11-05 15:15:00", "b": 481.0}, {"a": "2024-11-05 15:20:00", "b": 462.6}, {"a": "2024-11-05 15:25:00", "b": 451.6666666666667}, {"a": "2024-11-05 15:30:00", "b": 451.5}, {"a": "2024-11-05 15:35:00", "b": 453.5}, {"a": "2024-11-05 15:40:00", "b": 453.8}, {"a": "2024-11-05 15:45:00", "b": 452.25}, {"a": "2024-11-05 15:50:00", "b": 459.2}, {"a": "2024-11-05 15:55:00", "b": 464.8}, {"a": "2024-11-05 16:00:00", "b": 458.5}, {"a": "2024-11-05 16:05:00", "b": 467.2}, {"a": "2024-11-05 16:10:00", "b": 489.4}, {"a": "2024-11-05 16:15:00", "b": 455.25}, {"a": "2024-11-05 16:20:00", "b": 452.4}, {"a": "2024-11-05 16:25:00", "b": 454.8}, {"a": "2024-11-05 16:30:00", "b": 453.25}, {"a": "2024-11-05 16:35:00", "b": 458.75}, {"a": "2024-11-05 16:40:00", "b": 455.4}, {"a": "2024-11-05 16:45:00", "b": 458.25}, {"a": "2024-11-05 16:50:00", "b": 466.6}, {"a": "2024-11-05 16:55:00", "b": 466.75}, {"a": "2024-11-05 17:00:00", "b": 473.75}, {"a": "2024-11-05 17:05:00", "b": 476.6}, {"a": "2024-11-05 17:10:00", "b": 463.6}, {"a": "2024-11-05 17:15:00", "b": 453.0}, {"a": "2024-11-05 17:20:00", "b": 443.4}, {"a": "2024-11-05 17:25:00", "b": 449.2}, {"a": "2024-11-05 17:30:00", "b": 452.0}, {"a": "2024-11-05 17:35:00", "b": 439.6}, {"a": "2024-11-05 17:40:00", "b": 437.5}, {"a": "2024-11-05 17:45:00", "b": 449.2}, {"a": "2024-11-05 17:50:00", "b": 458.5}, {"a": "2024-11-05 17:55:00", "b": 464.4}, {"a": "2024-11-05 18:00:00", "b": 470.5}, {"a": "2024-11-05 18:05:00", "b": 462.25}, {"a": "2024-11-05 18:10:00", "b": 448.8}, {"a": "2024-11-05 18:15:00", "b": 461.0}, {"a": "2024-11-05 18:20:00", "b": 468.2}, {"a": "2024-11-05 18:25:00", "b": 476.2}, {"a": "2024-11-05 18:30:00", "b": 504.5}, {"a": "2024-11-05 18:35:00", "b": 521.0}, {"a": "2024-11-05 18:40:00", "b": 542.2}, {"a": "2024-11-05 18:45:00", "b": 559.8}, {"a": "2024-11-05 18:50:00", "b": 589.4}, {"a": "2024-11-05 18:55:00", "b": 619.6}, {"a": "2024-11-05 19:00:00", "b": 639.6}, {"a": "2024-11-05 19:05:00", "b": 645.4}, {"a": "2024-11-05 19:10:00", "b": 666.5}, {"a": "2024-11-05 19:15:00", "b": 683.2}, {"a": "2024-11-05 19:20:00", "b": 696.6666666666666}, {"a": "2024-11-05 19:25:00", "b": 713.2}, {"a": "2024-11-05 19:30:00", "b": 736.2}, {"a": "2024-11-05 19:35:00", "b": 737.6}, {"a": "2024-11-05 19:40:00", "b": 740.8}, {"a": "2024-11-05 19:45:00", "b": 758.2}, {"a": "2024-11-05 19:50:00", "b": 754.4}, {"a": "2024-11-05 19:55:00", "b": 776.2}, {"a": "2024-11-05 20:00:00", "b": 746.2}, {"a": "2024-11-05 20:05:00", "b": 735.0}, {"a": "2024-11-05 20:10:00", "b": 743.5}, {"a": "2024-11-05 20:15:00", "b": 758.5}, {"a": "2024-11-05 20:20:00", "b": 765.2}, {"a": "2024-11-05 20:25:00", "b": 754.6}, {"a": "2024-11-05 20:30:00", "b": 760.0}, {"a": "2024-11-05 20:35:00", "b": 771.2}, {"a": "2024-11-05 20:40:00", "b": 767.8}, {"a": "2024-11-05 20:45:00", "b": 746.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    