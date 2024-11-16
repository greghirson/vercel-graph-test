
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-15 18:00:00", "b": 486.0}, {"a": "2024-11-15 18:05:00", "b": 494.6666666666667}, {"a": "2024-11-15 18:10:00", "b": 494.4}, {"a": "2024-11-15 18:15:00", "b": 486.0}, {"a": "2024-11-15 18:20:00", "b": 467.2}, {"a": "2024-11-15 18:25:00", "b": 475.8}, {"a": "2024-11-15 18:30:00", "b": 451.0}, {"a": "2024-11-15 18:35:00", "b": 445.5}, {"a": "2024-11-15 18:40:00", "b": 457.0}, {"a": "2024-11-15 18:45:00", "b": 460.2}, {"a": "2024-11-15 18:50:00", "b": 444.5}, {"a": "2024-11-15 18:55:00", "b": 445.6666666666667}, {"a": "2024-11-15 19:00:00", "b": 446.0}, {"a": "2024-11-15 19:05:00", "b": 466.5}, {"a": "2024-11-15 19:10:00", "b": 472.5}, {"a": "2024-11-15 19:15:00", "b": 475.75}, {"a": "2024-11-15 19:20:00", "b": 473.8}, {"a": "2024-11-15 19:25:00", "b": 476.4}, {"a": "2024-11-15 19:30:00", "b": 482.2}, {"a": "2024-11-15 19:35:00", "b": 513.8}, {"a": "2024-11-15 19:40:00", "b": 557.4}, {"a": "2024-11-15 19:45:00", "b": 554.8}, {"a": "2024-11-15 19:50:00", "b": 545.6}, {"a": "2024-11-15 19:55:00", "b": 551.0}, {"a": "2024-11-15 20:00:00", "b": 546.75}, {"a": "2024-11-15 20:05:00", "b": 554.2}, {"a": "2024-11-15 20:10:00", "b": 554.2}, {"a": "2024-11-15 20:15:00", "b": 546.0}, {"a": "2024-11-15 20:20:00", "b": 552.2}, {"a": "2024-11-15 20:25:00", "b": 575.6}, {"a": "2024-11-15 20:30:00", "b": 575.6}, {"a": "2024-11-15 20:35:00", "b": 569.0}, {"a": "2024-11-15 20:40:00", "b": 570.0}, {"a": "2024-11-15 20:45:00", "b": 575.5}, {"a": "2024-11-15 20:50:00", "b": 570.25}, {"a": "2024-11-15 20:55:00", "b": 581.6}, {"a": "2024-11-15 21:00:00", "b": 592.8}, {"a": "2024-11-15 21:05:00", "b": 600.2}, {"a": "2024-11-15 21:10:00", "b": 627.0}, {"a": "2024-11-15 21:15:00", "b": 622.0}, {"a": "2024-11-15 21:20:00", "b": 587.0}, {"a": "2024-11-15 21:25:00", "b": 615.4}, {"a": "2024-11-15 21:30:00", "b": 630.5}, {"a": "2024-11-15 21:35:00", "b": 635.5}, {"a": "2024-11-15 21:40:00", "b": 621.0}, {"a": "2024-11-15 21:45:00", "b": 607.6}, {"a": "2024-11-15 21:50:00", "b": 613.75}, {"a": "2024-11-15 21:55:00", "b": 629.8}, {"a": "2024-11-15 22:00:00", "b": 634.0}, {"a": "2024-11-15 22:05:00", "b": 607.4}, {"a": "2024-11-15 22:10:00", "b": 608.5}, {"a": "2024-11-15 22:15:00", "b": 614.5}, {"a": "2024-11-15 22:20:00", "b": 612.8}, {"a": "2024-11-15 22:25:00", "b": 635.5}, {"a": "2024-11-15 22:30:00", "b": 627.8}, {"a": "2024-11-15 22:35:00", "b": 611.5}, {"a": "2024-11-15 22:40:00", "b": 624.6}, {"a": "2024-11-15 22:45:00", "b": 640.8}, {"a": "2024-11-15 22:50:00", "b": 623.25}, {"a": "2024-11-15 22:55:00", "b": 611.0}, {"a": "2024-11-15 23:00:00", "b": 630.2}, {"a": "2024-11-15 23:05:00", "b": 622.3333333333334}, {"a": "2024-11-15 23:10:00", "b": 622.6}, {"a": "2024-11-15 23:15:00", "b": 645.6}, {"a": "2024-11-15 23:20:00", "b": 619.0}, {"a": "2024-11-15 23:25:00", "b": 616.25}, {"a": "2024-11-15 23:30:00", "b": 611.0}, {"a": "2024-11-15 23:35:00", "b": 617.5}, {"a": "2024-11-15 23:40:00", "b": 609.0}, {"a": "2024-11-15 23:45:00", "b": 605.6}, {"a": "2024-11-15 23:50:00", "b": 611.0}, {"a": "2024-11-15 23:55:00", "b": 632.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    