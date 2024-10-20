
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-19 17:40:00", "b": 609.6}, {"a": "2024-10-19 17:45:00", "b": 645.0}, {"a": "2024-10-19 17:50:00", "b": 692.6}, {"a": "2024-10-19 17:55:00", "b": 658.4}, {"a": "2024-10-19 18:00:00", "b": 656.4}, {"a": "2024-10-19 18:05:00", "b": 656.0}, {"a": "2024-10-19 18:10:00", "b": 639.75}, {"a": "2024-10-19 18:15:00", "b": 655.0}, {"a": "2024-10-19 18:20:00", "b": 658.4}, {"a": "2024-10-19 18:25:00", "b": 659.75}, {"a": "2024-10-19 18:30:00", "b": 653.8}, {"a": "2024-10-19 18:35:00", "b": 645.4}, {"a": "2024-10-19 18:40:00", "b": 643.3333333333334}, {"a": "2024-10-19 18:45:00", "b": 639.25}, {"a": "2024-10-19 18:50:00", "b": 609.6}, {"a": "2024-10-19 18:55:00", "b": 620.8}, {"a": "2024-10-19 19:00:00", "b": 644.5}, {"a": "2024-10-19 19:05:00", "b": 635.5}, {"a": "2024-10-19 19:10:00", "b": 628.6}, {"a": "2024-10-19 19:15:00", "b": 619.8}, {"a": "2024-10-19 19:20:00", "b": 616.2}, {"a": "2024-10-19 19:25:00", "b": 617.4}, {"a": "2024-10-19 19:30:00", "b": 611.75}, {"a": "2024-10-19 19:35:00", "b": 620.5}, {"a": "2024-10-19 19:40:00", "b": 610.6}, {"a": "2024-10-19 19:45:00", "b": 613.2}, {"a": "2024-10-19 19:50:00", "b": 627.5}, {"a": "2024-10-19 19:55:00", "b": 605.8}, {"a": "2024-10-19 20:00:00", "b": 610.0}, {"a": "2024-10-19 20:05:00", "b": 614.0}, {"a": "2024-10-19 20:10:00", "b": 606.3333333333334}, {"a": "2024-10-19 20:15:00", "b": 605.0}, {"a": "2024-10-19 20:20:00", "b": 592.0}, {"a": "2024-10-19 20:25:00", "b": 603.2}, {"a": "2024-10-19 20:30:00", "b": 613.8}, {"a": "2024-10-19 20:35:00", "b": 609.2}, {"a": "2024-10-19 20:40:00", "b": 613.4}, {"a": "2024-10-19 20:45:00", "b": 607.5}, {"a": "2024-10-19 20:50:00", "b": 598.4}, {"a": "2024-10-19 20:55:00", "b": 598.75}, {"a": "2024-10-19 21:00:00", "b": 602.25}, {"a": "2024-10-19 21:05:00", "b": 611.5}, {"a": "2024-10-19 21:10:00", "b": 606.75}, {"a": "2024-10-19 21:15:00", "b": 597.5}, {"a": "2024-10-19 21:20:00", "b": 595.75}, {"a": "2024-10-19 21:25:00", "b": 598.75}, {"a": "2024-10-19 21:30:00", "b": 597.5}, {"a": "2024-10-19 21:35:00", "b": 593.8}, {"a": "2024-10-19 21:40:00", "b": 592.6}, {"a": "2024-10-19 21:45:00", "b": 594.25}, {"a": "2024-10-19 21:50:00", "b": 603.0}, {"a": "2024-10-19 21:55:00", "b": 595.4}, {"a": "2024-10-19 22:00:00", "b": 590.6}, {"a": "2024-10-19 22:05:00", "b": 596.8}, {"a": "2024-10-19 22:10:00", "b": 598.8}, {"a": "2024-10-19 22:15:00", "b": 616.8}, {"a": "2024-10-19 22:20:00", "b": 604.0}, {"a": "2024-10-19 22:25:00", "b": 584.5}, {"a": "2024-10-19 22:30:00", "b": 589.6}, {"a": "2024-10-19 22:35:00", "b": 584.5}, {"a": "2024-10-19 22:40:00", "b": 591.4}, {"a": "2024-10-19 22:45:00", "b": 585.8}, {"a": "2024-10-19 22:50:00", "b": 590.6}, {"a": "2024-10-19 22:55:00", "b": 597.5}, {"a": "2024-10-19 23:00:00", "b": 600.8}, {"a": "2024-10-19 23:05:00", "b": 590.6}, {"a": "2024-10-19 23:10:00", "b": 597.2}, {"a": "2024-10-19 23:15:00", "b": 595.5}, {"a": "2024-10-19 23:20:00", "b": 591.4}, {"a": "2024-10-19 23:25:00", "b": 593.75}, {"a": "2024-10-19 23:30:00", "b": 597.6}, {"a": "2024-10-19 23:35:00", "b": 590.3333333333334}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    