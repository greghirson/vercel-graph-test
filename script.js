
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 11:50:00", "b": 667.8}, {"a": "2024-10-27 11:55:00", "b": 656.0}, {"a": "2024-10-27 12:00:00", "b": 633.2}, {"a": "2024-10-27 12:05:00", "b": 600.5}, {"a": "2024-10-27 12:10:00", "b": 602.2}, {"a": "2024-10-27 12:15:00", "b": 591.6}, {"a": "2024-10-27 12:20:00", "b": 591.4}, {"a": "2024-10-27 12:25:00", "b": 605.2}, {"a": "2024-10-27 12:30:00", "b": 592.0}, {"a": "2024-10-27 12:35:00", "b": 579.5}, {"a": "2024-10-27 12:40:00", "b": 563.2}, {"a": "2024-10-27 12:45:00", "b": 535.0}, {"a": "2024-10-27 12:50:00", "b": 533.3333333333334}, {"a": "2024-10-27 12:55:00", "b": 525.4}, {"a": "2024-10-27 13:00:00", "b": 525.6666666666666}, {"a": "2024-10-27 13:05:00", "b": 506.0}, {"a": "2024-10-27 13:10:00", "b": 468.8}, {"a": "2024-10-27 13:15:00", "b": 447.8}, {"a": "2024-10-27 13:20:00", "b": 451.4}, {"a": "2024-10-27 13:25:00", "b": 461.0}, {"a": "2024-10-27 13:30:00", "b": 461.8}, {"a": "2024-10-27 13:35:00", "b": 446.25}, {"a": "2024-10-27 13:40:00", "b": 450.8}, {"a": "2024-10-27 13:45:00", "b": 454.4}, {"a": "2024-10-27 13:50:00", "b": 460.0}, {"a": "2024-10-27 13:55:00", "b": 447.6}, {"a": "2024-10-27 14:00:00", "b": 454.5}, {"a": "2024-10-27 14:05:00", "b": 444.4}, {"a": "2024-10-27 14:10:00", "b": 443.8}, {"a": "2024-10-27 14:15:00", "b": 446.75}, {"a": "2024-10-27 14:20:00", "b": 436.0}, {"a": "2024-10-27 14:25:00", "b": 435.0}, {"a": "2024-10-27 14:30:00", "b": 428.0}, {"a": "2024-10-27 14:35:00", "b": 423.0}, {"a": "2024-10-27 14:40:00", "b": 427.0}, {"a": "2024-10-27 14:45:00", "b": 427.25}, {"a": "2024-10-27 14:50:00", "b": 433.0}, {"a": "2024-10-27 14:55:00", "b": 425.6}, {"a": "2024-10-27 15:00:00", "b": 417.3333333333333}, {"a": "2024-10-27 15:05:00", "b": 421.0}, {"a": "2024-10-27 15:10:00", "b": 422.75}, {"a": "2024-10-27 15:15:00", "b": 410.0}, {"a": "2024-10-27 15:20:00", "b": 410.3333333333333}, {"a": "2024-10-27 15:25:00", "b": 407.6666666666667}, {"a": "2024-10-27 15:30:00", "b": 451.5}, {"a": "2024-10-27 15:35:00", "b": 479.8}, {"a": "2024-10-27 15:40:00", "b": 448.25}, {"a": "2024-10-27 15:45:00", "b": 452.0}, {"a": "2024-10-27 15:50:00", "b": 502.4}, {"a": "2024-10-27 15:55:00", "b": 422.75}, {"a": "2024-10-27 16:00:00", "b": 416.0}, {"a": "2024-10-27 16:05:00", "b": 416.2}, {"a": "2024-10-27 16:10:00", "b": 414.3333333333333}, {"a": "2024-10-27 16:15:00", "b": 411.0}, {"a": "2024-10-27 16:20:00", "b": 408.0}, {"a": "2024-10-27 16:25:00", "b": 404.4}, {"a": "2024-10-27 16:30:00", "b": 404.0}, {"a": "2024-10-27 16:35:00", "b": 403.0}, {"a": "2024-10-27 16:40:00", "b": 403.5}, {"a": "2024-10-27 16:45:00", "b": 403.0}, {"a": "2024-10-27 16:55:00", "b": 403.0}, {"a": "2024-10-27 17:00:00", "b": 402.6666666666667}, {"a": "2024-10-27 17:05:00", "b": 402.3333333333333}, {"a": "2024-10-27 17:10:00", "b": 402.4}, {"a": "2024-10-27 17:15:00", "b": 401.6}, {"a": "2024-10-27 17:20:00", "b": 401.8}, {"a": "2024-10-27 17:25:00", "b": 401.3333333333333}, {"a": "2024-10-27 17:30:00", "b": 401.6}, {"a": "2024-10-27 17:35:00", "b": 401.25}, {"a": "2024-10-27 17:40:00", "b": 402.5}, {"a": "2024-10-27 17:45:00", "b": 402.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    