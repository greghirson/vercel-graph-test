
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-21 13:40:00", "b": 401.0}, {"a": "2024-10-21 13:45:00", "b": 402.5}, {"a": "2024-10-21 13:50:00", "b": 403.5}, {"a": "2024-10-21 13:55:00", "b": 401.75}, {"a": "2024-10-21 14:00:00", "b": 401.25}, {"a": "2024-10-21 14:05:00", "b": 401.4}, {"a": "2024-10-21 14:10:00", "b": 402.3333333333333}, {"a": "2024-10-21 14:15:00", "b": 402.25}, {"a": "2024-10-21 14:20:00", "b": 402.0}, {"a": "2024-10-21 14:25:00", "b": 402.8}, {"a": "2024-10-21 14:30:00", "b": 402.3333333333333}, {"a": "2024-10-21 14:35:00", "b": 402.25}, {"a": "2024-10-21 14:40:00", "b": 400.8}, {"a": "2024-10-21 14:45:00", "b": 402.4}, {"a": "2024-10-21 14:50:00", "b": 403.3333333333333}, {"a": "2024-10-21 14:55:00", "b": 402.6666666666667}, {"a": "2024-10-21 15:00:00", "b": 401.8}, {"a": "2024-10-21 15:05:00", "b": 402.0}, {"a": "2024-10-21 15:10:00", "b": 401.3333333333333}, {"a": "2024-10-21 15:15:00", "b": 403.25}, {"a": "2024-10-21 15:20:00", "b": 402.4}, {"a": "2024-10-21 15:25:00", "b": 401.5}, {"a": "2024-10-21 15:30:00", "b": 401.5}, {"a": "2024-10-21 15:35:00", "b": 401.6}, {"a": "2024-10-21 15:40:00", "b": 402.25}, {"a": "2024-10-21 15:45:00", "b": 401.75}, {"a": "2024-10-21 15:50:00", "b": 402.25}, {"a": "2024-10-21 15:55:00", "b": 402.5}, {"a": "2024-10-21 16:00:00", "b": 401.5}, {"a": "2024-10-21 16:05:00", "b": 403.0}, {"a": "2024-10-21 16:10:00", "b": 405.0}, {"a": "2024-10-21 16:15:00", "b": 405.3333333333333}, {"a": "2024-10-21 16:20:00", "b": 403.6666666666667}, {"a": "2024-10-21 16:25:00", "b": 405.0}, {"a": "2024-10-21 16:30:00", "b": 408.0}, {"a": "2024-10-21 16:35:00", "b": 410.5}, {"a": "2024-10-21 16:40:00", "b": 411.5}, {"a": "2024-10-21 16:45:00", "b": 418.3333333333333}, {"a": "2024-10-21 16:50:00", "b": 427.75}, {"a": "2024-10-21 16:55:00", "b": 449.4}, {"a": "2024-10-21 17:00:00", "b": 465.3333333333333}, {"a": "2024-10-21 17:05:00", "b": 470.6}, {"a": "2024-10-21 17:10:00", "b": 474.8}, {"a": "2024-10-21 17:15:00", "b": 479.0}, {"a": "2024-10-21 17:20:00", "b": 491.0}, {"a": "2024-10-21 17:25:00", "b": 508.6}, {"a": "2024-10-21 17:30:00", "b": 527.4}, {"a": "2024-10-21 17:35:00", "b": 543.6}, {"a": "2024-10-21 17:40:00", "b": 558.75}, {"a": "2024-10-21 17:45:00", "b": 569.5}, {"a": "2024-10-21 17:50:00", "b": 554.4}, {"a": "2024-10-21 17:55:00", "b": 547.8}, {"a": "2024-10-21 18:00:00", "b": 550.0}, {"a": "2024-10-21 18:05:00", "b": 542.2}, {"a": "2024-10-21 18:10:00", "b": 539.4}, {"a": "2024-10-21 18:15:00", "b": 529.8}, {"a": "2024-10-21 18:20:00", "b": 528.0}, {"a": "2024-10-21 18:25:00", "b": 554.6}, {"a": "2024-10-21 18:30:00", "b": 590.0}, {"a": "2024-10-21 18:35:00", "b": 577.2}, {"a": "2024-10-21 18:40:00", "b": 571.3333333333334}, {"a": "2024-10-21 18:45:00", "b": 577.8}, {"a": "2024-10-21 18:50:00", "b": 594.4}, {"a": "2024-10-21 18:55:00", "b": 608.75}, {"a": "2024-10-21 19:00:00", "b": 604.6666666666666}, {"a": "2024-10-21 19:05:00", "b": 629.6}, {"a": "2024-10-21 19:10:00", "b": 642.0}, {"a": "2024-10-21 19:15:00", "b": 619.0}, {"a": "2024-10-21 19:20:00", "b": 608.0}, {"a": "2024-10-21 19:25:00", "b": 616.75}, {"a": "2024-10-21 19:30:00", "b": 624.8}, {"a": "2024-10-21 19:35:00", "b": 624.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    